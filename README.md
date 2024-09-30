# Casper Clone

This project is a clone of Casper's product page built using React with Next.js. It features a well-designed layout of the top of the page as well as a 3D viewer of the mattress utilizing Three.js.

Casper's product page can be broken down into multiple components featuring the header, overview, feature showcase, similar products, FAQ, customer reviews and footer. Due to the limited time, this project only covers the header and overview as they are the first components displayed to the customers. This means they’re the most important components on the page in order to capture the customer's attention.

### **Header**

The header is a fairly simple horizontal bar with different buttons and navigation links. It is noted that several buttons and navigation links are removed and a hamburger menu is introduced as the page scales down into a mobile view. The header is also sticky to the top of the page as we scroll down.

### **Overview**

The body of the overview is more complex but it can be divided into two different components:

- A gallery of pictures and showcases of the product
    
    The layout of this can be easily achieved using grid templates and assigning proper areas and positions to the associated picture/element
    
- Overview of product information (price, review, description)
    
    Product information is just information stacked on each other we're going rows. Using Flexbox is very easy to get the layout that we would like
    

As we scaled down into the mobile view, the picture gallery is removed in favour of a picture carousel that could be scrolled horizontally. The product information is split into two parts with one half being the price and review at the top of the page and the other half containing the rest of the product information that comes after the picture carousel. 

# Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

# Timeline

### **1st hour**

The first hour was spent developing and carving out the HTML structure for both the banner and overview. Here I was able to style the headers to a decent and relatively nice design.

### 5th hour

4 hours were spent working on further developing the HTML of the overview and styling the layout into shape. There were a lot of trial and error and playing around with images to get them into the proper layout.

### 10th hour

Here I work towards making a responsive web design with mostly CSS as I had already taken into consideration of responsive web design while writing the HTML. However, it was here that I realized that I should have taken a mobile-first approach in designing a responsive web as I couldn’t figure out a way to split the product information into two parts that sandwich the picture carousel.

### Additional work

Unfortunately, I have taken more time than the time limit allotted to implement a site that I was decently happy with. However, I enjoyed the time I spent on this project and decided to add more features past the time limit.

Looking at the Casper page, I noticed that none of the pictures had a magnifying glass that allowed customers to zoom in and carefully inspect the product. While other competitor sites, clearly offer this feature. However, at the end of the day, pictures are only a 2D view of the product, failing to give the customers a proper estimate and expectation of the product until they see it in person.

In this demo, I’ve included an all-new 3D model viewer that allows the customers to dive in and fully interact with the product virtually. Providing an engaging and immersive experience like no other increases the conversion rate and increased satisfaction of the customers in the market for the product.

I've also spent a bit of time cleaning up the code and extracting it into Smaller components. I've also created a possible sample data that would be retrieved from the backend and used to power the app. While these changes aren’t visible to the human eye, they provide a clean codebase to work with.

### **To be implemented**

With the limited time I had, I limited my focus on the major parts of the website provide a good experience for the customers shopping around while also adding a feature that is possibly beneficial. The following are details that should be implemented or fixed.

- Font size and font spacing
- Padding and spacing of the site
- Fill pictures in the content box in the picture carousel.
- Sticky header
- Finer details like icons, product discount
- Picture carousel that locks pictures in place when scrolling
- Layout thrashing on page load
- Button/Link functionality

# Summary

Overall, I really enjoyed working on this project and I am proud of what I've made within such a short time. Front end isn't my strongest suit, however, I really enjoyed breaking down the layout and design of an existing website and then creating it from the ground up. Presenting a very neat and clean website to the customer. I’ve also never utilized any 3D models in my websites before, It's been quite the experience and I'm extremely glad and proud of how it turned out.
