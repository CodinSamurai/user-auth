import './profile.css'
import { useAuthValue } from './createContext'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

function Profile() {
  
  const {currentUser} = useAuthValue()

  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <p><strong>Email: {currentUser?.email} </strong> </p>
        <p><strong>Email verified: </strong> {`${currentUser?.emailVerified}`} </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile