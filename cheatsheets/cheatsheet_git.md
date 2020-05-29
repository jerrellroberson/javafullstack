# Installing and Setting up Git

1. Visit this link and follow the directions for your operating system:   http://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. To verify your installation, type git in the terminal 
3. Setup your username and password
```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
4. Verify Git stored your settings 
```bash
git config --global --list
```
5. To use colors when using the git, enable the following setting:
```bash
git config --global color.ui "auto"
```
6. Various git commands
```bash
git init - initialize the repository.
git add . - add all the files that were changed since the last back up to the staging area.
git status - shows you all the files that were changed since the last backup and which ones are already added to the staging area.
git commit -m "..." - commits the changes to the repository.
git checkout ____ - switches to the branch name provided in your git repository. This will create a new branch if the name provided doesn't exist.
git branch - shows all of your git branches and marks the one you are currently on.
git log - shows all the backups created in the repository.
git blame ____ - shows who wrote which line of code or in other words who is to be blamed for that particular line of code.
git remote add origin ____ - tells git to add a remote place called 'origin' to a remote URL ___.
git push - pushes the changes in your local repository to the remote repository.
git pull - pulls the changes in a remote repository to your own local repository.
git clone ___ - clones a remote repository in ___ to your own local folder.
```
7. To create a repository, type 'git init' which initializes a repository in therelated folder.7. To create a repository, type 'git init' which initializes a repository in therelated folder.7. To create a repository, type 'git init' which initializes a repository in therelated folder.7. To create a repository, type 'git init' which initializes a repository in therelated folder.7. To create a repository, type 'git init' which initializes a repository in therelated folder.7. To create a repository, type 'git init' which initializes a repository in therelated folder.7. To create a repository, type 'git init' which initializes a repository in therelated folder.

