
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
        <h1 className=' font-cinzel text-4xl font-semibold'><span>Hi, Welcome Back !</span> <span className=' text-[#D1A054]'> {user? user.displayName : ''}</span> </h1>
    </div>
    );
};

export default UserHome;