# 0 Setup Project


- `npx create-react-app (project-name)`
- `cd (project-name)`
-`npm start` or `npm run start` or `npx react-scripts start`
- auto open browser localhost : 3000

# 1 About Project
- other code => Dependencies
- you can dele node_modules 
- then can install `npm install`

- Our's code in src

2 : Clean up Project - remove unnecessary thing
clean up index.js
clean up App.js, App.css
clean up public/index.html
remove unnecessary file
restructure folder to app/ component/


3 : CSS setup
#### 3.1 : ติดตั้ง scss

ติดตั้ง sass เพื่อช่วยให้การเขียน CSS แบบ BEM สะดวกมากขึ้น
รันคำสั่ง npm install sass ลงใน terminal (อย่าลืม check path ว่าอยู่ที่ root project แล้ว : ตำแหน่งที่มี file package.json)
ตรวจสอบ dependencies ในไฟล์ package.json ว่ามี sass แล้ว

#### 3.2 : setup index.scss

ไฟล์ index.css : ให้แปลงนามสกุลไฟล์ เป็น index.scss
ไฟล์ index.js : เปลี่ยนการ import จาก index.css เป็น index.scss

#### 3.3 : CSS Global Reset

ไฟล์ index.scss : เขียน css rule เพื่อลบ default padding,margin ต่างๆ รวมถึงวิธีการวัดขนาดของ Box-model

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%; /*equal font-size : 10px*/
}

body {
    box-sizing: border-box;
}


#### 3.4 : Typography

ไฟล์ index.scss : ให้ทำการ import google font

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700&display=swap');


ไฟล์ index.scss : ทำการเพิ่ม font หลักของ application (Nunito) ลงใน tag body

body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


#### 3.5 : Color

knowledge : scss มีความสามารถในการสร้างตัวแปรไว้ใช้ได้
ไฟล์ index.scss : สร้างตัวแปรสำหรับเก็บสีหลักๆของ web-application

$primary: #db4c3f;
$grey-light: #eaeaea;
$grey-dark: #808080
$white: #fff;
 

    <div className='todo'>
        <div className="todo__header">Header</div>
        <div className="todo__sidebar">SideBar</div>
        <div classNAme="todo_content">TodoContent</div>
    </div>



    $header-height: 44px;
$sidebar-width: 300px;

.todo {
    display: grid;
    grid-template-rows: $header-height calc(100vh - $header-height);
    grid-template-columns: $sidebar-width calc(100vw - $sidebar-width);

    &__header {
        grid-column: 1/3;
        grid-row: 1/2;
    }

    &__sidebar {
        grid-row: 2/3;
        grid-column: 1/2;
        // position: sticky;
    }

    &__content {
        grid-row: 2/3;
        grid-column: 2/3;

        // other css
        overflow-y: scroll;
        padding: 20px 30px;
        padding-top: 0;
    }
}

import styles from 'App.module.scss';

<div className={styles.todo}>
    <div className={styles.todo__header}>Header</div>
    <div className={styles.todo__sidebar}>SideBar</div>
    <div classNAme={styles.todo__content}>TodoContent</div>
</div>;

######################################################################################
<header className='header'>
    {/* Logo */}
    <div className='header__logo'></div>

    {/* Text */}
    <div className='header__text'>
        <h3>Todoist</h3>
    </div>

    {/* Search */}
    <div className='header__search'></div>
</header>

import { FaHome } from 'react-icons/fa';

// add this code in return statement
<div className='header__logo'>
    <FaHome />
</div>

##################################################################

import { FaSearch } from 'react-icons/fa';
<div className='search'>
    <span className='search__icon'>
        <FaSearch />
    </span>
    <input type='text' className='search__input' placeholder='search' />
</div>;

// import global.scss
.search {
    position: relative;
    border-radius: 4px;

    // magnify-icon
    &__icon {
        // position
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);

        // decorate
        font-size: 1.6rem;
        font-weight: 200;
        color: grey;

        // control-child
        display: flex;
    }

    &__input {
        width: 100%;
        padding: 5px;
        padding-left: 30px;
        border-radius: 5px;
        border: 1px solid $grey-light;
        font-size: 1.6rem;
        outline: none;
        color: $grey-dark;
    }
}