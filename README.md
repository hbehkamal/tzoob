# TZOOB

## Description
Tzoob is a user-friendly web application that displays a simple list of products. It offers an intuitive interface that allows users to easily sort products, adjust the number of products displayed per page, and navigate between different pages.
In this assignment, I aimed to leverage my existing knowledge while embracing the opportunity to explore and work with cutting-edge technologies such as React server components, Next.js API routes, and Chakra-UI.
By incorporating these technologies into the project, I aimed to demonstrate my versatility and proficiency in working with a diverse range of tools. I hope you enjoy exploring this project as much as I enjoyed working on it!


**DEMO:** [tzoob.vercel.app](https://tzoob.vercel.app/)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File & Folder Structure](#file--folder-structure)
- [Performance](#performance)
- [User Experience](#user-experience)

## Installation
1. Install dependencies: `npm install` or `yarn` or `pnpm install`
2. Rename `.env.sample` to `.env`
3. Build the application: `npm run build` or `yarn run build` or `pnpm build`
4. Run built version: `npm run start` or `yarn run start` or `pnpm start`

or you can run the development server via `npm run dev` or `yarn run dev` or `pnpm dev`

## Usage
1. open [http://localhost:3000](http://localhost:3000) with your browser
2. Enjoy :)


## Features
- **Responsive design**: Enjoy a seamless browsing experience on any device, including mobiles, tablets, and desktops.
- **Sorting options**: Easily organize products based on their price, with the ability to sort in ascending or descending order.
- **Customizable page limit**: Set the number of products displayed per page according to user preference.
- **User-friendly pagination**: Navigate through different pages effortlessly using a pagination system inspired by the intuitive design of boozt.com.

## Technologies Used
### Next.js:
- **App router**: By utilizing the Next.js App router, I aimed to create a well-structured and organized application flow. I could easily define dynamic routes, handle query parameters, and implement nested routing, allowing for a flexible and intuitive user interface.
- **API Routes**: Next.js API routes provided me with a powerful tool to build serverless API endpoints effortlessly. By leveraging this feature, I aimed to create a seamless and efficient communication layer between the front-end and back-end components of the application.
- **Server components**: I aimed to enhance the performance and scalability of the application by offloading server-side rendering tasks. This approach allows for faster page loads and improved user experiences.
- **client components**: Client components play a crucial role in the interactive parts of the application, enhancing the user experience and enabling user interactions. 
- **Image Optimization**: To optimize the loading speed and performance of the application, I leveraged Next.js' built-in image optimization. This feature automatically optimizes and delivers images in the most efficient format and size, resulting in faster page loads and improved user experiences.
### Chakra-UI:
To ensure a visually appealing and user-friendly interface, I incorporated Chakra-UI, a highly customizable and accessible component library. By utilizing Chakra-UI, I aimed to create a consistent and responsive design that enhances the overall user experience.
### Typescript:
By utilizing TypeScript, I aimed to enhance the maintainability and scalability of the codebase. TypeScript's static typing and advanced tooling capabilities helped me catch potential errors early on and improve the overall development process.
### SASS Module System:
In certain areas of the project, where I couldn't utilize Chakra-UI, I showcased my skills in utilizing the SASS module system. This allowed me to create modular and reusable styles, ensuring a consistent and visually appealing design throughout the application.

## File & Folder Structure
All directories inside `app` except `api` started with an underscore to mark them as private and non-routable
* `app` (root directory)
	* `page.tsx` This file serves as the root route of the application. It is responsible for importing and rendering the app providers and corresponding container component for the page.
	* `layout.tsx` This file is responsible for rendering the reusable parts of the main layout as a server component, such as the header and footer, across all the pages that utilize this layout.
	* `page.module.scss` This file contains the specific styles for the layout.tsx component.

	* `api` This directory is specifically dedicated to writing API endpoints and handling their associated logic.
	* `_api` This directory is used to handle API-related functionality, such as making HTTP requests to API endpoints.
	* `_containers` This directory is dedicated to defining containers for different pages within the application.
	* `_components` These components are designed to be modular and independent, allowing for easy integration and maintenance.
	* `_constants` This directory is used to store constants or configuration values that are used throughout the project.
	* `_utils` This directory is used to store utility functions that can be reused across different parts of the project.
	* `_providers` Providers are responsible for managing and sharing state or data across different parts of the application, ensuring consistent and efficient data flow.
	* `_styles` This directory contains global stylesheets, Sass mixins, and variables that define the overall visual appearance and styling of the application.
	* `_types` It provides a centralized location for defining custom types, interfaces, and type aliases, ensuring type safety and code clarity.

### File conventions
In this project, I followed a set of file conventions to ensure a consistent and organized structure. Here are the conventions I adhered to:

1. Each directory has an `index` file: To facilitate easy importing and exporting of files within a directory, each directory includes an `index` file. This file serves as a central point for exporting all the files within that directory, making it convenient to import multiple files from a single directory.

2. Component files: For each component, the following files are typically included:
	* `component-name.tsx`: This file is responsible for rendering the UI of the component. It contains the JSX code that defines the visual structure and layout of the component.
	* `component-name.hook.ts`: This file houses the component's logic. It contains custom hooks or functions that handle the component's state management, side effects, or any other necessary operations.
	* `component-name.type.ts`: This file defines TypeScript interfaces or types specific to the component. It ensures type safety and provides clear documentation for the expected data structures or props used by the component.
	* `component-name.module.scss`: If custom styling is required and cannot be achieved solely through Chakra-UI's styling props, this file is used. It contains the custom styles written in SCSS (Sass) syntax, allowing for more granular control over the component's visual appearance.

## Performance
Throughout this assignment, I prioritized optimizing the performance of the application. To achieve this, I utilized Chrome DevTools Lighthouse, a powerful tool for assessing and improving website performance.

<img src="https://i.postimg.cc/BvxfRtQw/1.jpg" alt="Lighthouse report before optimization"/>


Initially, the application scored 76 in the performance category. However, I dedicated time and effort to identify and address the performance bottlenecks. By carefully analyzing the Lighthouse report and utilizing various performance profiling techniques, I was able to pinpoint areas that required optimization.

<img src="https://i.postimg.cc/Sskb4qnQ/2.jpg" alt="Lighthouse report after optimization"/>


Through a combination of code refactoring, implementing performance best practices, and optimizing resource loading, I successfully improved the application's performance. As a result, the Lighthouse performance score increased to an impressive 97.

You can also check out [GT Metrix](https://gtmetrix.com/reports/tzoob.vercel.app/TOtG9uAu/) & [Web Page Test](https://www.webpagetest.org/result/230711_AiDcYA_5SS/) reports.

## User Experience
To provide a seamless and engaging experience during data loading, I incorporated a loading skeleton. This feature ensures that users are aware that content is being fetched and displayed, preventing them from perceiving any delays as a result of data retrieval. By visually representing the structure of the content being loaded, the loading skeleton maintains a consistent and intuitive user interface.

Additionally, I implemented a small scrolling to top functionality after changing the page number. This feature ensures that when users navigate to a different page within the application, they are automatically scrolled to the beginning of the products list. This smooth scrolling behavior enhances the user experience by saving users from manually scrolling back to the top, allowing them to seamlessly continue browsing the products.
