import { myCacheTest } from '../../../lib/myCacheTest'

export default async function Page() {
  await myCacheTest('test')
  return <div>Minimal Cache Test</div>
}
