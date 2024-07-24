//1st week
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }
//good


// type VideoProps = {
//     video: {
//         title: string,
//         link: string,
//         description: string,
//     }
// }
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
// export const YoutubeVideo = (props:VideoProps) => {
//     return <div>
//         <VideoHeader videoName={props.video.title}/>
//         <VideoContent videoContent={props.video.link} />
//         <VideoDescription videoDescription={props.video.description}/>
//     </div>
// }
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//     return <YoutubeVideo video={video}/>
// }
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );
//good


// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl?: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={15} n={"yyy"} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
// ReactDOM.render(<div><Page age={15} name={"Leo"}/></div>,
//     document.getElementById('root')
// );

//
// type PropsType = {
//     city: string        // 'minsk'
//     country: string     // 'belarus'
//     coords?: string     // '53.917501,27.604851'
// }
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk' country={'belarus'}/>
// }
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
//good

// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }
//good

// import ReactDOM from 'react-dom'
// export const VideoBlock = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
// ReactDOM.render(<div><VideoBlock/></div>,
//     document.getElementById('root')
// );
//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода
//good

// console.log({} === {})
//good# false


// import ReactDOM from 'react-dom'
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
//good



//2 week
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]
//     return (
//         <p>Тут будет список пользователей</p>
//
//     )
//     console.log(results.length)
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// results.length = 2 good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//     <p>Array.isArray(users): {String(Array.isArray(users))}</p>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что вернёт выражение: Array.isArray(users)?
//true

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(getUser)}
//             </ul>
//         </main>
//     )
//     console.log(typeof getUser)
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что вернёт выражение: typeof getUser?

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Какую переменную необходимо указать вместо XXX, чтобы код заработал?
//getUser good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//         <p>Тут будет список пользователей!</p>
//     )
// }
// ReactDOM.render(
//     <UsersList />, document.getElementById('root')
// );
// console.log(typeof useState);
// Что вернёт выражение: typeof useState?
//function good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)
//     console.log(Array.isArray(usersList))
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//
//     )
//
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//true good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { users.map(user => <li>{user}</li> )}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//map good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Какой тип правильнее указать вместо "any" при типизации стэйта?
//Array<string> good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User({id,name,age}: UserType) {
//     return (
//         <li>User {name}: {age} y.o.</li>
//     )
// }
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>(state)
//
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//             <ol>
//                 {usersList.map((el)=><User {...el} key={el.id}/>)}
//             </ol>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода
//good



//3 week
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Button() {
//     return <button
//         onClick={() => alert('')}>Click</button>;
// }
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
//good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//filteredUsers good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={()=>props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         setUsers(users.filter(u => u.id !== userID))
//     }
//     return (
//         <main>
//             <h4>Users list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// Какой тип было бы указать правильнее?
//number good

// const user = {}
// const construction = user
// const student = {}
// if(XXX === user) {
//     console.log ("Yo!!!")
// }
/*Какую переменную надо указать вместо XXX, кроме user, что бы в консоль вывелась строка "Yo!!!?*/
//construction good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список ользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     const isArray = Array.isArray(olderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что будет записано в переменную isArray в данном коде?
//true good

// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === "object")
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы в консоль вывело true?
//object good

// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Button() {
//     const [tagName, setTagName] = useState<string>()
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         setTagName(e.currentTarget.tagName)
//     }
//     return (
//         <>
//             <p>{tagName}</p>
//             <button onClick={onClickHandler} >
//                 <span>Click</span>
//             </button>
//         </>
//     )
// }
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, что бы на странице появился текст BUTTON?
//currentTarget good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { users.map(u => <User key={u.id} {...u} />) }
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//u good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {
//                     users.map(u => <User key={u.id}
//                                          id={u.id}
//                                          name={u.name}
//                                          age={u.age}
//                         />
//                     )
//                 }
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал оптимально?
//key good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//filter good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список пользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//UserType good

// 4week
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const [text, setText] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <input
//                 value={userName}
//                 onChange={onChangeHandler}
//                 onBlur={()=> {
//                     // xxx
//                     setText(userName)
//                     setUserName("")
//                 }}
//             />
//             <p>{text}</p>
//         </div>
//     )
// }
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// setUserName("")

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
// deleteUser

// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={addNote}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// addNote bad
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Post() {
//     const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//         // xxx
//         alert("Летим-бомбим!!!")
//     }
//     return (
//         <div>
//             <article>
//                 <h4>Как дела, братан?</h4>
//                 <p>
//                     Вижу, что неплохо. Давай, трудись )))
//                     Google ждёт тебя в цифровом рабстве!
//                     Cтавь лайк и полетели!!!
//                 </p>
//                 <a href={"https://www.youtube.com/"}
//                    onClick={onClickHandler}
//                 >В этом месте подробнее...</a>
//             </article>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Post/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube
// при клике по ссылке?


// finish 1st week
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//props.id

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof setUsers?
// "function" setUsers хук useState!!!

// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === "object")
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы в консоль вывело true?
// "object" good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(results.length)
//     const users = results[0]
//     const setUsers = results[1]
//     return (
//         <p>Тут будет список пользователей</p>
//     )
//
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Чему равно results.length?
// 2 В данном коде results является массивом, возвращаемым хуком useState. Этот массив всегда содержит два элемента:
// Текущее значение состояния (в данном случае, массив ["Bob", "Alex", "Ann"]).
// Функцию для обновления этого состояния (setUsers).

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
// filter good

// import ReactDOM from 'react-dom'
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
// name fatherName sonName

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>(state)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода
// state good

// import ReactDOM from "react-dom/client";
// import React from "react";
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Page age={40} name="Brendan" avatarUrl={"test"} />
// );
// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)
// props.age props.name good

// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }
// wallets[0] wallets[1] good

// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы инпут был контролируемым?
// value={userName} good

import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                onBlur={addNote}
            />
            <div>
                <button
                    onClick={() => setNotes([])}
                >Clear notes list</button>
            </div>
            <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{n}</p>)}
            </div>
        </div>
    )
}
ReactDOM.render(
    <Notes/>, document.getElementById('root')
);
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?
//onClick={() => setNotes([])}