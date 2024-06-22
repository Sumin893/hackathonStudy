import styled from 'styled-components';

const Homepage = () => {
  return(
    <>
    <HomepageBanner>
      <img src="/HomepageBanner.png" alt="HomepageBanner" className='="Homepage-banner' />
    </HomepageBanner>
    </>
  )
}

export default Homepage

const HomepageBanner = styled.div`
display: flex;
justify-content: center;
`