const jasmine = require("jasmine");
const User=require("./jasmineLab")
 describe("User :",function(){
    let user;
        beforeEach(()=>{
            user=new User("engy",123456)
            product={
                name:"oppo",
                price:1000
            }
             
        })
     describe(" addToCart", function () {
         it("product is like name string and price number ", function () {
             user.addToCart(product)
             user.addToCart(product)
             expect(user.cart.length).toEqual(2)

         })
     })
     describe(" calculateTotalCartPrice", function () {
         it("calculateTotalCartPrice return number ", function () {
             user.addToCart(product)
             expect(user.calculateTotalCartPrice()).toBe(1000)

         })

     })
     describe(" checkout", function () {
            let fukdeliveyOrder = jasmine.createSpy('deliveyOrder');
            let fukpaymentModel = jasmine.createSpyObj(["goToVerifyPage","returnBack", "isVerify"])
            user.checkout(fukpaymentModel,fukdeliveyOrder)
            it("paymentModel methods should called", function () {
                expect(fukpaymentModel.goToVerifyPag).toHaveBeenCalled()
            })
            it("paymentModel methods should called", function () {
                expect(fukpaymentModel.returnBack).toHaveBeenCalled()
            })
            it("paymentModel methods should called", function () {
                expect(fukpaymentModel.sVerify).toHaveBeenCalled()
            })
            describe(" deliveyOrder", function () {
                it("deliveyOrder method should not called", function () {
                    expect(fukdeliveyOrder).not.toHaveBeenCalled()
                })
               
            })
        })
    
})

