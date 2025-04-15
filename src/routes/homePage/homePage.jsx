// Use "fcs" for short.
// Check this GitHub repository for more detail: https://github.com/safak/snippets
/*
Do the following steps to be able to use the shortcuts:
- Step 1: Copy the content in file javascriptreact.json in the repo
- Step 2: Use Ctrl + Shift + P to open the command palette, type "Snippets" and select "Preferences: Configure User Snippets"
- Step 3: Select "javascriptreact.json" and paste the content you copied in step 1
- Step 4: Save the file
*/
import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.
                    </p>

                    <SearchBar />

                    <div className='boxes'>
                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className='box'>
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>

                        <div className='box'>
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage