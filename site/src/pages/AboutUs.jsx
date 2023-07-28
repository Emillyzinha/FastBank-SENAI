import Nav from "../components/Nav/nav";
import Footer from "../components/footer/footer";
import logo from '../assets/logo-topo.png'

function AboutUs() {
    return (
        <div className='h-screen'>
            <Nav />
            <div className="flex justify-center">
                <div className="max-w-screen-2xl w-10/12 xl:w-3/5">
                    <h1 className="text-4xl mb-20 text-tema text-center xl:text-8xl pt-20">ABOUT US</h1>
                    <h1 className="text-3xl text-center px-3 py-2 xl:pt-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat vel ligula sed volutpat. Duis consequat ut lorem non pretium. Cras eu risus ut nisl tempus fringilla. Quisque sollicitudin elit sed nulla porta mattis. Maecenas in nisl libero. Ut blandit leo in iaculis pretium. Praesent mauris mi, posuere pharetra fermentum eu, aliquam id neque. Mauris elementum efficitur vehicula. Nam id facilisis mi. Duis et mi dui. Pellentesque egestas luctus purus eu tempor.
                    </h1>
                    <h1 className="text-3xl text-center px-3 py-2 xl:pt-12">
                        Sed posuere a lorem a faucibus. Donec congue enim ex, ac dictum magna facilisis eu. Vestibulum posuere ipsum et ultrices mollis. Curabitur sagittis tortor nibh, non sagittis libero tempor ut. Ut imperdiet consectetur ipsum, vitae lobortis libero auctor viverra. Nunc eu nisl augue. Proin vel enim convallis, consequat metus vitae, finibus est. Nulla at elit nec arcu elementum lobortis. Quisque congue luctus eros eget ornare. Nunc ante magna, interdum eleifend consectetur eu, elementum sed massa. Donec maximus ipsum eget nisl iaculis, tincidunt venenatis felis efficitur. Cras tincidunt a nunc ac ullamcorper. Etiam lacinia, ante commodo cursus aliquet, leo sem dapibus elit, non pellentesque ipsum odio vitae mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis tortor vel elit condimentum fermentum. Suspendisse sollicitudin dui justo, eget placerat urna feugiat nec.
                    </h1>
                    <h1 className="text-3xl text-center px-3 py-2 xl:pt-12">
                        Sed sed risus luctus, sollicitudin diam at, scelerisque diam. Pellentesque vestibulum enim sit amet enim vulputate maximus. Nulla ut varius metus. In malesuada tellus vitae dolor sodales, at porttitor neque vehicula. Praesent feugiat, tortor quis luctus venenatis, dui erat laoreet ipsum, sit amet consectetur mi risus sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse placerat malesuada augue sit amet blandit. Morbi rhoncus, erat sit amet efficitur iaculis, diam dui posuere magna, vitae ultrices enim libero at justo. Sed pulvinar varius lectus, at interdum nibh sollicitudin et. Quisque in quam id neque imperdiet blandit. Mauris condimentum lectus non malesuada tincidunt. Aliquam ac purus porttitor, pellentesque velit sed, fermentum orci.
                    </h1>
                    <h1 className="text-3xl text-center px-3 py-2 xl:pt-12">
                        Maecenas enim ipsum, malesuada sit amet nisl sit amet, blandit cursus ipsum. Pellentesque sagittis ipsum ligula, in fermentum mi dapibus quis. Suspendisse eu ex ut risus placerat posuere at lobortis nunc. Donec consectetur risus mattis elit feugiat interdum. Suspendisse nibh justo, eleifend a fermentum sit amet, efficitur sed metus. Nam id nisi blandit, rutrum libero eu, fermentum arcu. Sed nec erat bibendum, placerat elit sed, fringilla nunc. Nunc a volutpat sapien.
                    </h1>
                    <h1 className="text-3xl text-center px-3 py-2 xl:pt-12">
                        Proin semper bibendum nisi ac malesuada. Cras feugiat, nibh sed lacinia accumsan, mauris mi commodo ligula, gravida iaculis neque lectus nec lectus. Morbi ut magna tempus, sagittis erat non, scelerisque quam. Fusce facilisis ex vitae erat commodo euismod. Suspendisse odio lorem, auctor nec nisl et, faucibus pharetra odio. Proin lectus orci, interdum venenatis auctor sed, varius nec enim. Phasellus tristique enim neque, eget dapibus erat placerat vel. Donec in justo sit amet est laoreet tincidunt sit amet ut orci. Suspendisse vel mattis ex. Proin congue varius aliquam. In ut nunc accumsan, luctus nisi nec, gravida velit.
                    </h1>
                    <div className="flex justify-center pt-20">
                        <img src={logo} alt="Logo YourBank completa, com as letras da logo e o nome embaixo na cor amarelo e preto" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs