//Input: path = "/home/"

// Output: "/home"

//.. directory up
//. curr directory

// The path must start with a single slash '/'.

// Directories within the path must be separated by exactly one slash '/'.

// The path must not end with a slash '/', unless it is the root directory.

// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.

function simplifyPath(path: string): string {

    let pathStack: string[] = [];
    let paths: string[] = path.split('/');

    for(path of paths) {
        if(path === '..') {
            if(pathStack.length) {
                pathStack.pop();
            }
            continue;
        }

        if(path === '.') {
            continue;
        }

        if(path) {
            pathStack.push(path);
        }
    }

    return pathStack.length ? '/' + pathStack.join('/') : '/';
};