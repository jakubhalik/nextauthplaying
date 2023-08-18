import subprocess
def ungenerate():
    try:
        result = subprocess.check_output(['git', 'status', '--porcelain']).decode('utf-8')
        if result: subprocess.call(['git', 'checkout', '--', '.']); print("Last generate changes reverted successfully")
        else: print("No changes detected")
    except Exception as e: print(f"An error occurred: {e}")
if __name__ == "__main__": ungenerate()