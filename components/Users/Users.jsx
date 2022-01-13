import React from 'react';
import s from './Users.module.css'

let Users = (props) => {

    
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce=>{
            props.setUsers()
        })

        props.setUsers(
            [
                {
                    id: 1, photoUrl: "https://w7.pngwing.com/pngs/875/44/png-transparent-computer-icons-user-profile-cv-miscellaneous-cdr-face.png",
                    followed: false, fullname: "Nurlybek", status: "asdasds", location: { coutry: "Kazakhstan", city: "Nur-sultan" }
                },
                {
                    id: 2, photoUrl: 'https://w7.pngwing.com/pngs/875/44/png-transparent-computer-icons-user-profile-cv-miscellaneous-cdr-face.png',
                    followed: true, fullname: "Nurlybek1", status: "asdasds1", location: { coutry: "Kazakhstan1", city: "Nur-sultan1" }
                },
                {
                    id: 3, photoUrl: 'https://w7.pngwing.com/pngs/875/44/png-transparent-computer-icons-user-profile-cv-miscellaneous-cdr-face.png',
                    followed: false, fullname: "Nurlybek2", status: "asdasds2", location: { coutry: "Kazakhstan2", city: "Nur-sultan2" }
                },
                {
                    id: 4, photoUrl: 'https://w7.pngwing.com/pngs/875/44/png-transparent-computer-icons-user-profile-cv-miscellaneous-cdr-face.png',
                    followed: true, fullname: "Nurlybek3", status: "asdasds3", location: { coutry: "Kazakhstan3", city: "Nur-sultan3" }
                }])
    }

    return (
        <div >
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div >
                            <img className={s.personal} src={u.photoUrl} alt="123" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div > {u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.coutry}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }


        </div>
    );
};

export default Users;