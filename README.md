# SMS - Stock Management System

### Installation Information

1.  Fork this repository to your own account.

2.  Clone the Forked repository:

        git clone https://github.com/BaburshahSayer/SMS.git

3.  After cloning, now run `cd stock-management-system` and get into your newly cloned local
    repository/folder.

4.  Then add upstream remote using

            git remote add upstream https://github.com/BaburshahSayer/SMS.git

5.  Get remotes using below commands

        git remote -v

6.  To install `Composer` globally, download the installer from
    https://getcomposer.org/download/ Verify that Composer in successfully
    installed, and version of installed Composer will appear:

        composer --version

7.  Install `Composer` dependencies.

        composer install

8.  Copy `.env.example` file and create duplicate. Use `cp` command for Linux or
    Max user.

        cp .env.example .env

9.  Create a table in MySQL database and fill the database details `DB_DATABASE`
    in `.env` file.

10. The below command will create tables into database using Laravel migration
    and seeder.

        php artisan migrate:fresh --seed

11. Generate your application encryption key:

        php artisan key:generate

12. Start the localhost server:

            php artisan serve

> You can now visit the app in your browser by visiting
> [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Conventions that must be applied.

1. Routes must be all lowercase.
2. Combined routes SHOULD seperate with (-) dash.
3. Controller name SHOULD be singular with 'Controller' suffix e.g
   ArchiveController.
4. Controller name SHOULD start with uppercase letter.

5. You SHOULD use snake_case as file name of your Blade templates. e.g
   show_filtered.blade.php

6. DB tables should be in lower case, with underscores to separate words
   (snake_case), and should be in plural form. e.g users, project_tasks

7. Pivot tables should be all lower case, each model in alphabetical order,
   separated by an underscore (snake_case). e.g post_user, task_user
8. Table column names should be in lower case, and snake_case (underscores
   between words). You shouldn't reference the table name. e.g post_body, id,
   created_at
9. Primary Key this should normally be id.
10. Foreign keys should be the model name (singular), with '\_id' appended to it
    (assuming the PK in the other table is 'id'). e.g user_id, comment_id
11. Normal variables should typically be in camelCase, with the first character
    lower case. $users = ..., $bannedUsers = ....
12. A model should be in singular, no spacing between words, and capitalised.
    e.g User

13. Model properties should be lower case, snake_case. They should also follow
    the same conventions as the table column names. e.g
    $this->updated_at,
    $this->title

14. Methods in your models in Laravel projects, like all methods in your Laravel
    projects, should be camelCase but the first character lower case. e.g public
    function get(), public function getAll().

15. Method name controller should follow the same rules as model methods. I.e.
    camelCase (first character lowercase). e.g index()

## Good Practices

1. Before doing fetching any records from upstream or pushing, always check if
   you are in the right branch. You can see what branch you are in by running
   the following command: `git branch`

2. Before doing any new work, always run `git fetch upstream` and then
   `git merge upstream/master` on the master branch. If you are not in the
   master branch, simply run `get checkout master` first to make sure you are in
   the master branch.

3. Keep every commit and its message meaningful and relevant.

4. Keep your PR titles meaningful and relevant.

5. Always include `ifix-` before your branch names. That’s our common pattern.
   `i` there is issue and fix is the fix you are providing.
