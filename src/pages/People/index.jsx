import People_heder from '@/components/People_heder/people_heder'
import People_listener from '@/components/People_listener/People'
import React from 'react'


const index = () => {
  return (
    <div>
        <div>
            <div>
       <People_heder/>
            </div>
            <div>
                <People_listener/>
            </div>
        </div>
    </div>
  )
}

export default index