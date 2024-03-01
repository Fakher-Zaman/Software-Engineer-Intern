import AdminInfo from "@/components/AdminInfo";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <section>
      <UserInfo
        username="fakher"
        email="fakher@gmail.com"
        age={20}
        location={['Earth', 'USA']}
      />
      <AdminInfo
        username="admin"
        email="admin@gmail.com"
        age={20}
        location={['Earth', 'USA']}
        admin="yes"
      />
    </section>
  );
}
