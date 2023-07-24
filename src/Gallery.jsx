import React from 'react'

const Gallery = () => {
  return (
    <main>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 m-10">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/awards/TIMD- Best Album of the year.jpeg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Big stages/AGP_7070.jpg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Big stages/AGP_7075.jpg" alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Big stages/DSC_6587.jpg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Magazine Features/a humming heart.jpg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Magazine Features/Take Off.PNG" alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Solo shots/Rolling Stones Independence Rock 6th November 2022 by Abhishek Gupta-20221106-2151-2-2.JPG" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Solo shots/DSC00452.jpg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/Solo shots/DSC03701.jpg" alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/with celebrities/AbhishekMittal_Parikrama_Irock-6.jpg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/with celebrities/L Shankar.jpg" alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Pictures/with celebrities/mohini dey.jpg" alt=""></img>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Gallery