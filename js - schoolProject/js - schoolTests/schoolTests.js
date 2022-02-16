class ThisTest {
    vOne
    vTwo
    func() {
        console.log(this.vOne - this.vTwo)
    }
}

const MainTest = new ThisTest
MainTest.vOne = 5
MainTest.vTow = 2
MainTest.func()