import UserContext, {Userstate} from './store'
import { useState, useContext } from 'react';

function ConsumerComponent(){
    const user = useContext(UserContext);

    return(
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

function UseContextComponent(){
    const [uesr, setUser] = useState<Userstate>({
        first: "Jane",
        last: "Smith"

    })
    return(
        <UserContext.Provider value={uesr}>
            <ConsumerComponent />
            <button
            onClick={() => setUser({
                first: "Ankita",
                last: "Mukadam"
        
            })}
            >
              Change context  
            </button>
        </UserContext.Provider>
    )


}
export default UseContextComponent;