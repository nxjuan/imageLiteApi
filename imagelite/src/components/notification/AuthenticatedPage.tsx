import Login from '@/app/login/page';
import { useAuth } from '@/resources'

interface AutenticatedPageProps {
    children: React.ReactNode
} 

export const AuthenticatedPage: React.FC<AutenticatedPageProps> = (
    {
        children
    }
) => {
    const auth = useAuth();

    if(!auth.isSessionValid()){
        return <Login />
    }

    return (
        <>
            {children}
        </>
    )

}