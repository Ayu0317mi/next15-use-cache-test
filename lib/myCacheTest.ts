// lib/myCacheTest.ts
export async function myCacheTest(arg?: string) {
  'use cache'
  console.log('myCacheTest called with', arg, 'at', new Date().toISOString())
  return 'hello'
}
