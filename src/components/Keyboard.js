import Key from './Key';
const KeyBoard = () => {

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  const keyboard = [firstRow, secondRow, thirdRow]

  return (
    <div>

      <div>
        {keyboard.map((row) => (
          <div className='flex flex-row space-x-4 m-2 justify-center'>
            {row.map((key) => (
              <Key character={key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyBoard