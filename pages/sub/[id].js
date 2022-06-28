import { useRouter } from 'next/router';
export default function Topic() {
  const router = useRouter();
  const id = router.query.id;
  console.log('router', router, id);
  return <>/sub/[id].js / id:{id}</>;
}
