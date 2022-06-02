const sum = (numbers: number[]) => {
  const result = numbers.reduce((acc, number) => acc + number, 0)
  return (cb: (result: number) => void) => cb(result)
}
export default sum
