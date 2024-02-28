import { Outlet } from 'react-router'

export default function RootLyout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
