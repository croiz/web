readme

การติดตั้ง

1.สร้าง Folder 

2.download ไฟล์มาไว้ใน folder ที่พึ่งสร้าง

3.เปิด โฟลเดอร์ด้วย visual code studio

4.ทำการเปิด terminal 2 อัน terminal อันแรกให้ทำการเข้าถึงไฟล์ Services โดยการเขียน cd Client
อันที่สองให้ทำการเข้าถึงไฟล์ Client โดยการเขียน cd Services

5 ทำการติดตั้ง package เสริมใน Client และ Services 
    5.1 Services ให้ทำการติดตั้ง express nodemon dotenv jason-parser body-parser axios 
    5.2 Client ให้ทำการติดตั้ง express 

6. ทำการใช้คำสั่ง npm init ทั้ง client และ services

7.ทำการเรียกใช้ script node index.js ทั้งใน Services และ Client จึงจะเริ่มใช้งาน

การใช้งาน
1. เข้า localhost:8080 จะไปยังหน้า home หน้า home จะเชื่อมต่อไปยัง home, login, contact

   1.1 เมื่อไปยังหน้า contact จะแสดงสมาชิกภายในกลุ่ม

   1.2 เมื่อไปยังหน้า home จะกลับไปยังหน้า home

   1.3 เมื่อไปยังหน้า login จะนำไปสู่หน้่ login

2. หน้า login จะมีการล็อกอินของ customer และ admin 
   
   2.1 ถ้าผู้ใช้ต้องการล็อกอิน ต้องใส่ user และ password ที่ถูกต้อง เมื่อผู้ใช้ล็อกอินสำเร็จ
         เว็ปจะนำผู้ใช้ไปยังหน้า shop
   
   2.2 ถ้าแอดมินต้องการล็อกอินต้องกดปุ่มเข้าสู่ระบบแอดมิน เมื่อเข้าสู่ระบบสำเร็จ เว็ปจะ
          พาไปสู่หน้า hyperlink เพื่อให้แอดมินเลือกฟังก์ชั่นที่ต้องการใช้โดยจะมี 2 ฟังก์ชั่น
          ให้เลือกใช้ได้แก่ product และ admin

3. เมื่อเข้ามาสู่ product จะมี 4 ฟังก์ชั่นให้เลือกใช้ได้แก่ เพิ่มข้อมูลสินค้า, แก้ไขข้่อมูล
     สินค้า, ลบข้อมูลสินค้า, แสดงข้อมูลสินค้า 

     3.1 การเพิ่มข้อมูล ผู้ดูแลระบบสามารถเพิ่มข้อมูลของสินค้าได้โดยการ ใส่ข้อมูลของ
           สินค้าที่ต้องการจะเพิ่ม ประกอบไปด้วย ชื่อสินค้า ร่ค่สินค้า น้ำหนักของสินค้า
    
     3.2 การอัพเดทข้อมูลของสินค้า ผู้ดูแลระบบสามารถแก้ไขข้อมูลของสินค้าได้โดย
           ผู้ใช้ต้องใส่ข้อมูลชื่อของสินค้า primary key จากนั้นสามารถใสข้อมูลที่ต้อง
           การแก้ไข 

     3.3 การลบข้อมูลสินค้าให้ผู้ดูแลระบบใส่ ชื่อของสินค้า primary key ลงไปจากนั้น
  กดปุ่ม delete 

     3.4 การแสดงข้อมูลสามารถทำได้ 2 แบบ

  1  การแสดงข้อมูล product ทั้งหมด โดยกดปุ่ม select all

               2  การแสดงข้อมูลแบบเลือกแสดง ให้ผู้ดูแลระบบใส่ชื่อ product ซึ่งเป็น 
                   primary key จากนั้นให้กดปุ่ม select เว็ปจะทำการแสดง product
                   ที่ผู้ใช้ต้องการค้นหา

4.   . เมื่อเข้ามาสู่ admin จะมี 4 ฟังก์ชั่นให้เลือกใช้ได้แก่ เพิ่มข้อมูล, แก้ไขข้อมูล
        , ลบข้อมูล, แสดงข้อมูล

     4.1 การเพิ่มข้อมูล ผู้ดูแลระบบสามารถเพิ่มข้อมูลของผู้ดูแลระบบได้โดยการ ใส่ข้อมูลของ
           ผู้ดูแลระบบที่ต้องการจะเพิ่ม ประกอบไปด้วย ชื่อ นามสกุล อีเมล และรหัสผ่าน
    
     4.2 การอัพเดทข้อมูลผูดูแลระบบ ผู้ดูแลระบบสามารถแก้ไขข้อมูลได้โดย
           ผู้ใช้ต้องใส่ข้อมูล อีเมล( primary key) จากนั้นสามารถใสข้อมูลที่ต้อง
           การแก้ไข 

     4.3 การลบข้อมูลให้ผู้ดูแลระบบใส่ ชื่ออีเมลล์ ซึ่งเป็นprimary key ลงไปจากนั้น
  กดปุ่ม delete 

     4.4 การแสดงข้อมูลสามารถทำได้ 2 แบบ

  1  การแสดงข้อมูล product ทั้งหมด โดยกดปุ่ม select all

               2  การแสดงข้อมูลแบบเลือกแสดง ให้ผู้ดูแลระบบใส่ชื่อ product ซึ่งเป็น 
                   primary key จากนั้นให้กดปุ่ม select เว็ปจะทำการแสดง ข้อมูลผู้ดูแลระบบ
                   ที่ผู้ใช้ต้องการค้นหา

5. Shop ถ้าผู้ใช้ต้องการค้าหาสินค้าที่ต้องการให้ใส่ ชื่อของสินค้าลงในช่องค้นหาแล้วทำการค้นหา