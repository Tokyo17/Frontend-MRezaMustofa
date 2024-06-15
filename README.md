# React 18.2.0 + Vite

Using React 18.2.0 Version



Pada project ini saya membuat list rekomendasi restaurat.Untuk styling saya menggunakan [Taildwind](https://tailwindcss.com/).
Berikut Link [Demo](https://666d8d9c273aa9c02c03b3d7--fanciful-cuchufli-30a3c4.netlify.app/) dari technical test.
Pada project ini menggunakan API restaurant yang saya buat menggunakan graphQL kemudian saya ubah ke API public :

API
```shell
curl --request GET \
  --url 'https://optimum-corgi-31.hasura.app/api/rest/restaurant'
```
Response
```json
{
  "data": [
        {
            "categories": "italian",
            "id": 1,
            "img": "https://images.unsplash.com/photo-1620131810504-79cc8cb61a70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVzdGF1cmFudHx8fHx8fDE2OTgzNTM0MTc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
            "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8120401320184!2d112.7379284!3d-7.262220399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f95e09ff5ded%3A0xc04881c8a397ffa1!2sHacienda!5e0!3m2!1sid!2sid!4v1698364035471!5m2!1sid!2sid",
            "name": "restaurant 1",
            "open": true,
            "price": 3,
            "rating": 3,
            "text": "Restoran italia yang kami tawarkan adalah tempat yang menyuguhkan pengalaman kuliner autentik dari Jepang, menggabungkan cita rasa yang lezat dengan atmosfer yang tenang dan indah. Dengan dekorasi yang dipenuhi elemen-elemen italia yang elegan."
        },
  ]
}
```

### Halaman Utama

- Filter navigasi
  - Open now (filter di sisi klien)
  - Harga (filter di sisi klien)
- Daftar Restoran
  - Gambar 
  - Masakan/Kategori 
  - Rating
  - Harga
  - Buka/Tutup
  - Nama Restoran
  - Tombol Learn more

### Detail View

- Nama Restoran & Rating
- Peta 
- Ulasan
  - Gambar
  - Nama
  - Rating
  - Deskripsi






