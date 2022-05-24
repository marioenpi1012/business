import Link from "next/link"


const ComingSoon = () => {
    return (
            <div className="comingSoonContainer">
                <h1>Coming Soon!!!</h1>
                <h4>Watch this space, we're creating something special.Follow our journey on social media.</h4>
                <Link href='/menu'>
                    <input type="button" value="Check our Menu" />
                </Link>
            </div>
    )
}

export default ComingSoon
