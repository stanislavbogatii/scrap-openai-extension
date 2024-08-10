import { Button, Input } from '@mui/material'

export const AccountSettings = () => {
  const handleClick = async () => {
    const [{ result }]: any = await chrome.scripting.executeScript({
      func: (name) => console.log(name),
      args: [name],
      target: {
        tabId:
          (await chrome.tabs.query({ active: true, currentWindow: true }))[0].id || 2,
      },
    });
    return result;
  };
  return (
    <>
      <Button onClick={handleClick}>Click</Button>
      <Input placeholder='Input key'></Input>
      <Input placeholder='Input key'></Input>
      <Input placeholder='Input key'></Input>
    </>
  )
}
