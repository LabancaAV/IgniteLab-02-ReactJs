import {Stack, Skeleton} from '@mui/material'

export function SkeletonCard () {
  return(
    <Stack 
      spacing={2} 
      sx={{width: '100%'}}
    >
      <Skeleton 
        variant='text' 
        sx={{bgcolor: 'grey.900', width: '80%'}}  
        height={40}
      />
      <Skeleton 
        variant='rectangular' 
        sx={{bgcolor: 'grey.900'}} 
        height={90}
      />
    </Stack>
  )
}

// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// interface SkeletonProps{
//   duration: number,
//   height: number,
//   width: number,
// }

// export function SkeletonCard(){
//   return(
//     <SkeletonTheme>
//     <Skeleton count={5} className="font-bold text-2xl pb-6 mb-6 border-b border-gray-200 block bg-gray-100"/>
//     </SkeletonTheme>
//   )
// }