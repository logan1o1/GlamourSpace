import React from "react";
import { Link } from 'react-router-dom';


export default function Overview() {
  return (
    <div className="min-h-screen from-gray-100 via-blue-50 to-blue-100 flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Overview
        </h2>

        <div className="text-gray-700 space-y-6">
          <p className="leading-relaxed text-justify text-lg">
            Welcome to the world of immersive interior design with Glamour Space
            AR. Our app is built to redefine how individuals and professionals
            approach space planning and customization. By harnessing the power
            of augmented reality, Glamour Space AR delivers an engaging platform
            where creativity meets practicality, making the process of designing
            interiors not only simpler but also remarkably accurate. At its
            core, Glamour Space AR bridges the gap between imagination and
            reality. Gone are the days of guesswork and tedious
            visualizations—our app lets you place virtual furniture, map your
            floors, and compare budgets in real-time. Whether you're planning a
            cozy home makeover or working on a large-scale design project,
            Glamour Space AR equips you with the tools needed to bring your
            ideas to life. With intuitive features and a user-friendly
            interface, you’ll find yourself designing like a pro in no time. One
            of the standout aspects of Glamour Space AR is its ability to cater
            to a wide audience. For homeowners, it’s a chance to experiment with
            decor, layouts, and textures without making irreversible
            commitments. For interior designers, it’s an innovative tool to
            present concepts to clients with unparalleled clarity. No matter
            your level of expertise, Glamour Space AR is designed to inspire
            confidence in your design choices. Accuracy is a hallmark of Glamour
            Space AR. Leveraging the latest advancements in ARCore technology,
            the app ensures precision in every detail, from measurements to
            placements. The floor mapping feature lets users analyze and modify
            layouts with exactitude, while the budget comparison tool provides
            transparency to avoid overspending on design elements like
            furniture, flooring, or decor. These features empower users to make
            informed decisions while staying within their budget. Beyond its
            functional capabilities, Glamour Space AR encourages creativity and
            personalization. The "Request Models" feature ensures that users can
            access tailor-made objects that perfectly align with their vision.
            Additionally, the ability to import models from personal inventories
            opens up endless opportunities for customization. By giving users
            control over their designs, Glamour Space AR fosters a sense of
            ownership and artistic freedom. In essence, Glamour Space AR is more
            than just a design app—it’s a complete solution for transforming
            spaces, managing costs, and unleashing creativity. Whether you’re
            designing your dream home or experimenting with new ideas, Glamour
            Space AR is your trusted partner in creating interiors that resonate
            with your personal style and functional needs. Dive in and
            experience the future of interior design, today.
          </p>
        </div>
        <div className="text-right mt-8">
          <Link to={"/installation"} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Next -{">"}
          </Link>
        </div>
      </div>
    </div>
  );
}
