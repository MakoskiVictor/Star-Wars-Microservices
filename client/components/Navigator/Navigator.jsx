const { default: Link } = require('next/link')

export default function Navigator ({ pathNames }) {
  return (
    <div>
      {pathNames.map((pathName) => <Link key={pathName.name} href={pathName.path}>{pathName.name}</Link>)}
    </div>
  )
}
