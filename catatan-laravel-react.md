# langkah membuat project laravel
1. membuat project laravel
```
composer create-project laravel/laravel larareact
```
2. Instalasi
```
composer require laravel/breeze --dev
```
3. Breeze & Blade
```
php artisan breeze:install react
```
4. Membuat migrate db News
```shell
php artisan make:model News -mcr
```
mcr = Model Controller Route  
* Setelah menjalankan perintah diatas, maka akan secara otomatis terbuat file `News` pada `Models`, `Controler`, dan `migration`.  
* Lalu buat table sesuai dengan yang diinginkan pada file migration -> `public function up()`.  
* Setelah itu jalankan `php artisan migrate` untuk generate table `News`

5. Membuat dummy data
```shell
php artisan make:seeder NewsSeeder
```
[doc-seeder](https://laravel.com/docs/9.x/seeding#writing-seeders)  
* Setelah dijalankan, maka akan terbuat file baru pada folder `database`->`seeder`  
* Lalu buat struktur data dummy, isikan sesuai dengan nama kolom pada DB News
* Lalu jalankan `php artisan db:seed --class=NewsSeeder`
* Dan jalankan `php artisan migrate`
6. Membuat
