import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ExitPage = () => {
    const router = useRouter();

    useEffect(() => {
        fetch('/api/exit')
            .then(() => {
                router.push('/');
            });
    }, [router]);
};

export default ExitPage;