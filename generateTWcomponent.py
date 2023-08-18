import os, re
def generate_component(name: str, classes: str):
    component_code = f"""interface {name}Props {{ children: React.ReactNode }}
const {name}: React.FC<{name}Props> = ({{ children }}) => 
    <div className="{classes}">{{children}}</div>;
export default {name};
"""
    with open(f'src/app/TWcomponents/{name}.tsx', 'w') as f:
        f.write(component_code)
    for root, _, files in os.walk('src/app'):
        for file in files:
            if file.endswith('.tsx') and file != f"{name}.tsx":
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f: content = f.read()
                pattern_open = re.compile(rf'<([a-zA-Z]+) className="{re.escape(classes)}">')
                match = pattern_open.search(content)
                if match:
                    tag = match.group(1)
                    pattern_close = f'</{tag}>'
                    content = content.replace(match.group(0), f'<{name}>', 1)
                    content = content.replace(pattern_close, f'</{name}>', 1)
                    relative_path = os.path.relpath('src/app/TWcomponents', root).replace('\\', '/')
                    if relative_path == 'TWcomponents': relative_path = './TWcomponents'
                    import_statement = f"import {name} from '{relative_path}/{name}';"
                    imports = re.findall(r'^import .+;?$', content, re.MULTILINE)
                    if imports:
                        last_import = imports[-1]
                        if len(last_import.split(';')) < 4: content = content.replace(last_import, f'{last_import} {import_statement}')
                        else: content = content.replace(last_import, f'{last_import}\n{import_statement}')
                    else: content = f'{import_statement}\n{content}'
                    with open(file_path, 'w') as f: f.write(content)
if __name__ == "__main__": name = input("Enter component name: "); classes = input("Enter class string: "); generate_component(name, classes)