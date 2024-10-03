import type { PageLoad } from "./$types"

type Service = {
    "title": string,
    "description": string
}

const graphics_data: Array<Service> = [
    {
        "title": "Brand Design",
        "description": "Your brand’s identity starts here. From logos to comprehensive brand guidelines, we craft designs that represent your business and resonate with your audience."
    },
    {
        "title": "Marketing & Advertising Design",
        "description": "Get noticed with creative and impactful marketing materials. We design posters, flyers, social media graphics, and more to help you stand out."
    },
    {
        "title": "Product & Packaging Design",
        "description": "Make your products irresistible with professional packaging and label design that highlights quality and attention to detail."
    },
    {
        "title": "Event Design",
        "description": "Set the tone for your events with unique designs for invitations, banners, and signage that leave a lasting impression on your guests."
    },
    {
        "title": "Publication Design",
        "description": "Turn pages into visual stories with our book covers, magazine layouts, and report designs, blending creativity with clarity."
    },
    {
        "title": "Merchandise Design",
        "description": "Customize your brand with apparel, promotional items, and product mockups that bring your vision to life."
    }
]

const dev_data: Array<Service> = [
    {
        "title": "Custom Web Application Development",
        "description": "We specialize in building tailored web applications that address your specific business needs, focusing on scalability and high performance."
    },
    {
        "title": "Web Development",
        "description": "Create modern, responsive, and fast web platforms that enhance your business's digital presence and drive engagement."
    },
    {
        "title": "UI/UX Design",
        "description": "Design intuitive and visually appealing interfaces that improve user experience and drive seamless interactions across devices."
    },
    {
        "title": "API Development",
        "description": "Develop secure and scalable APIs to enable seamless integration between your applications and third-party services."
    },
    {
        "title": "Maintenance and Support",
        "description": "Ensure your web applications are always up-to-date and running smoothly with our ongoing maintenance and support services."
    },
    {
        "title": "IT Consulting",
        "description": "Get expert advice on leveraging technology to improve business processes, optimize infrastructure, and plan for future growth."
    }
]

const projects_data: Array<any> = [
    {
        "title": "Kayoola Bus Promo",
        "img_url": "/images/try.jpeg",
        "description": "Refreshing the look of the new Kayoola Bus",
        "tags": [
            "Graphic Design", "Flyer", "Advertisement"
        ]
    },
    {
        "title": "Pyramid Movers",
        "img_url": "/images/try2.jpeg",
        "description": "Extending Pyramid's reach with stunning graphics design.",
        "tags": [
            "Graphic Design", "Flyer", "Advertisement"
        ]
    }
]



export async function load({ params }: any) {
    return {
        graphics_data,
        dev_data,
        projects_data,
    }
}
