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
6. Membuat Factories News
```shell
php artisan make:factory NewsFactory
```
* lalu isi field pada `NewsFactory` seperti di `NewsSeeder`
* Setelah membuat field pada `NewsFactory` jalankan command migrate dan seed
```shell
php artisan migrate

php artisan db:seed --class=NewsSeeder

php artisan migrate:refresh --seeder
```
7. Membuat Navbar dengan DaisyUI
* masuk pada web https://daisyui.com
* install paket daisy dengan perintah `npm i daisyui`
* buat componen `Navbar.jsx` pada folder `Components`
* copas template navbar dari web daisyui https://daisyui.com/components/navbar/
* panggil className Navbar pada `Homepage.jsx`
8. 
