import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
const categories = ['men', 'women', 'kids', 'accessories']
export default async function Search() {
  return (
    <form
      action='/search'
      method='GET'
      className='flex  items-stretch h-10 '
    >
      <Select name='category'>
        <SelectTrigger className='w-auto h-full bg-gray-800 text-white border-gray-600 border-r-0 rounded-r-none rounded-l-md focus:ring-0'>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent position='popper'>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className='flex-1 rounded-none bg-white text-black text-base h-full border-0 focus-visible:ring-0'
        placeholder={`Search Site ${APP_NAME}`}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-black rounded-l-none rounded-r-md h-full px-3 py-2 hover:bg-yellow-400 transition '
      >
        <SearchIcon className='w-6 h-6' />
      </button>
    </form>
  )
}