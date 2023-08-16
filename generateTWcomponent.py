import os
import re

def generate_component(name: str, classes: str):
    component_code = f"""interface {name}Props {{ children: React.ReactNode }}
const {name}: React.FC<{name}Props> = ({{ children }}) => 
    <div className="{classes}">{{children}}</div>;
export default {name};
"""
    # Save to a new file
    with open(f'src/app/TWcomponents/{name}.tsx', 'w') as f:
        f.write(component_code)

    # Now, let's go through all the .tsx files in src/app/ and replace the elements
    for root, _, files in os.walk('src/app/components'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    content = f.read()

                # Check for matching opening div
                pattern_open = f'<div className="{classes}">'
                if pattern_open in content:
                    # Find the number of opening div tags after the matched tag before the closing div
                    post_match = content.split(pattern_open, 1)[1]
                    div_count = post_match.count('<div') + 1
                    div_close_count = 0

                    # Iterate through the post match string and find the corresponding closing div
                    idx = 0
                    while div_close_count < div_count:
                        if post_match[idx:idx+5] == '<div':
                            div_count += 1
                        elif post_match[idx:idx+6] == '</div>':
                            div_close_count += 1
                        idx += 1

                    # Now, replace the corresponding closing div
                    before = content[:content.rfind(pattern_open) + len(pattern_open)]
                    after = post_match[idx:]
                    middle = post_match[:idx].replace('</div>', f'</{name}>', 1)

                    content = before + middle + after

                    # Replace the matched opening tag
                    content = content.replace(pattern_open, f'<{name}>', 1)

                    # Add the import statement
                    import_statement = f"import {name} from '../TWcomponents/{name}';"
                    imports = re.findall(r'^import .+;?$', content, re.MULTILINE)
                    if imports:
                        if len(imports) % 3 == 2:
                            content = content.replace(imports[-1], imports[-1] + ' ' + import_statement)
                        else:
                            content = content.replace(imports[-1], imports[-1] + '\n' + import_statement)
                    else:
                        print(f"No import statements found in {file_path}. Skipping...")

                    # Save the modified content back
                    with open(file_path, 'w') as f:
                        f.write(content)

if __name__ == "__main__":
    name = input("Enter component name: ")
    classes = input("Enter class string: ")
    generate_component(name, classes)