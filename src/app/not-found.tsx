import dynamic from 'next/dynamic';

const NotFoundComponent = dynamic(() => import('./404'), {
  ssr: false,
});

export default NotFoundComponent;