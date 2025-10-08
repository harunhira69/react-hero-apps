import { toast } from "react-toastify"
 import { ToastContainer } from 'react-toastify';

// get
export const loadApplist = () => {
  try {
    const data = localStorage.getItem('applist')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = product => {
  const appList = loadApplist()

  try {
    const isDuplicate = appList.some(p => p.id === product.id)
    if (isDuplicate) {
      alert('Already added this app!');
      return;
    }
    const updatedApplist = [...appList, product]
    localStorage.setItem('applist', JSON.stringify(updatedApplist))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFromApplist = id => {
  const applist = loadApplist()
  try {
    const updatedApplist = applist.filter(p => p.id !== id)
    localStorage.setItem('applist', JSON.stringify(updatedApplist))
  } catch (err) {
    console.log(err)
  }
}