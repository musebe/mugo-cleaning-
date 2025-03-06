export default function AboutUs() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-muted'>
      <main className='flex flex-col items-center gap-6 text-center'>
        <h1 className='text-primary text-3xl font-bold'>About Us</h1>
        <p className='text-secondary text-lg'>
          We are a team dedicated to building innovative solutions for modern
          problems.
        </p>
        <button className='button button-primary'>Explore Services</button>
      </main>
    </div>
  );
}
