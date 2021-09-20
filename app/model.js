var MODEL = (function () {
    // console.log("model");
    var _myVar = "Model";
    var _homePageInfo = `<h1>HOME</h1>
    <div class="images">
    <img src="./images/igloo.jpeg" alt="Igloo">
    <img src="./images/snow-trees.jpeg" alt="Snowy Trees">
    </div>
    <div class="paragraphs">
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis iusto eaque repudiandae, porro
        culpa placeat quisquam, est saepe fuga odit eveniet minima deleniti nihil ad amet dolor iure quidem fugit
        neque voluptas inventore quae. Ullam quisquam praesentium deleniti corporis.

    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor illo culpa facere animi veniam explicabo, dolorum vel veritatis! Tempora id omnis sint quis provident eum et, earum quam impedit distinctio voluptatibus nisi doloribus, unde libero vero aliquid ipsam molestias?
    </p>
    </div>`;
    var _aboutPageInfo = `<h1>ABOUT</h1>
    <div class="images">
    <img src="./images/lightning.jpeg" alt="Lightning">
    <img src="./images/sky.jpeg" alt="Sky">
    </div>
    <div class="paragraphs">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores assumenda tempore quos optio in ducimus dignissimos omnis ipsam. Repudiandae qui quasi sit officia quibusdam aperiam quo vitae, repellendus natus nemo ipsa, eius fugit hic totam incidunt laborum sequi vel.
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis error, ab modi necessitatibus cumque architecto dolorem deserunt minima reiciendis itaque consectetur, quos voluptas odio aperiam, numquam asperiores provident voluptatum iure ipsam. Eos accusantium esse expedita quos officia quasi totam!
    </p>
    </div>`;
    var _productsPageInfo = `<h1>PRODUCTS</h1>
    <div class="images">
    <img src="./images/avocado.jpeg" alt="Avocado Toast">
    <img src="./images/toast.jpeg" alt="Toast">
    </div>
    <div class="paragraphs">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis soluta praesentium illo, accusamus, optio cum architecto sunt temporibus unde ab consequuntur fugiat id, dolorum est assumenda blanditiis error voluptatibus deserunt maxime possimus. Voluptas quam provident, atque amet dicta qui.
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa earum magnam pariatur rerum, voluptatibus similique obcaecati odit neque eveniet, blanditiis rem dolorem quos. Aut voluptate perferendis culpa nobis sunt natus atque vero, exercitationem tenetur nostrum asperiores animi ut totam sint?
    </p>
    </div>`
    var _contactPageInfo = `<h1>CONTACT US</h1>
    <div class="images">
    <img src="./images/contact.jpeg" alt="Contact">
    <img src="./images/work.jpeg" alt="Work">
    </div>
    <div class="paragraphs">
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum laborum dolorum officia consequatur voluptate repellendus quas. Aliquam quibusdam, animi reiciendis quod repellat eligendi voluptate voluptates sunt. Ea, neque obcaecati aliquam voluptas perspiciatis nihil expedita sed, fugiat libero odio adipisci.
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quod earum doloribus veritatis soluta minima dignissimos tempore amet odio vitae odit ea, quas quaerat perferendis molestias similique maxime possimus delectus sapiente, dolores eligendi laborum tenetur nesciunt. Numquam voluptas rem ipsa?
    </p>
    </div>`

    var _getMyVariable = function (buttonID, callback) {
        let newName = "_" + buttonID + "PageInfo";
        $("#content").html(eval(newName));
        if (callback) {
            callback(newName);
        }
    };

    return {
        getMyVariable: _getMyVariable,
    };
})();