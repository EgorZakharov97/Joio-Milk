import React from 'react'

function Map({ className }: { className? :string }) {
  return (
    <section className={className}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164633.57675539717!2d-97.29264841125674!3d49.85373724274105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf91a2b11%3A0x2b2a1afac6b9ca64!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1645493025535!5m2!1sen!2sca" width="600" height="450" style={{ border:0, backgroundPosition: 'cover' }} allowfullscreen={true} loading="lazy"></iframe>
    </section>
  )
}

export default Map