"use client";
import Image from "next/image";

export default function CurriculumLearning() {
  return (
    <section className="w-full bg-gray-50 pb-32">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto px-6 pt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Curriculum & Learning<br />Management
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          A centralized academic suite designed to streamline curriculum delivery, lesson execution,
          assessments, student analytics, and compliance across CBSE, ICSE, IB, IGCSE & State Boards.
        </p>
      </div>


      {/* SECTION 1 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Curriculum Mapping</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Map academic goals to subjects & classroom instructions</li>
            <li>🟢 Grade-wise & term-wise syllabus structuring</li>
            <li>🟢 Supports CBSE, ICSE, IB, IGCSE & State Boards</li>
            <li>🟢 Track completion & academic schedule adherence</li>
          </ul>
        </div>
        <Image
          src="/curriculum/c1.jpg"
          alt="Curriculum Mapping"
          width={450}
          height={350}
          className="rounded-xl"
        />
      </div>

      {/* SECTION 2 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        <Image
          src="/curriculum/c2.jpg"
          alt="Lesson Planning"
          width={450}
          height={350}
          className="rounded-xl order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Lesson Planning</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Daily & weekly classroom execution plans</li>
            <li>🟢 Assign worksheets, activities & digital material</li>
            <li>🟢 Learning outcomes & competency-based instruction</li>
            <li>🟢 Lesson completion tracking built-in</li>
          </ul>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Assessment & Evaluation</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Supports formative & summative assessments</li>
            <li>🟢 Rubrics-based competency evaluation</li>
            <li>🟢 Automated scoring & digital answer upload</li>
            <li>🟢 Insightful reports for academic review</li>
          </ul>
        </div>
        <Image
          src="/curriculum/c3.jpg"
          alt="Assessment & Evaluation"
          width={450}
          height={350}
          className="rounded-xl"
        />
      </div>

      {/* SECTION 4 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        <Image
          src="/curriculum/c4.jpg"
          alt="Student Performance Analytics"
          width={450}
          height={350}
          className="rounded-xl order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Student Performance Analytics</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 AI-driven progress visualization & predictive insights</li>
            <li>🟢 Identify learning gaps early for targeted support</li>
            <li>🟢 Personalized learning intervention recommendations</li>
            <li>🟢 Competency-based student profiles</li>
          </ul>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Digital Learning Resources</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Classwork, homework, worksheets & revision material</li>
            <li>🟢 Interactive videos & e-learning modules</li>
            <li>🟢 Shared content library for teachers & students</li>
            <li>🟢 Seamlessly accessible via web & mobile platforms</li>
          </ul>
        </div>
        <Image
          src="/curriculum/c5.jpg"
          alt="Digital Learning Resources"
          width={450}
          height={350}
          className="rounded-xl"
        />
      </div>

      {/* SECTION 6 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        <Image
          src="/curriculum/c6.jpg"
          alt="Academic Audit & Compliance"
          width={450}
          height={350}
          className="rounded-xl order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Academic Audit & Compliance</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Track academic plan vs. delivery deviation</li>
            <li>🟢 Review lesson & curriculum execution by teachers</li>
            <li>🟢 Audit-ready academic reports & dashboards</li>
            <li>🟢 NEP, CBSE & accreditation compliance support</li>
          </ul>
        </div>
      </div>

      {/* OUTCOME */}
      <div className="bg-emerald-50 max-w-6xl mx-auto mt-24 px-6 py-16 rounded-2xl text-center shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          The Outcome: Structured & Measurable Learning
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          A fully organized teaching–learning ecosystem that improves planning accuracy,
          boosts classroom productivity, enhances learning progress, and supports every learner toward success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-semibold text-gray-900">
          <p>📘 Curriculum Clarity</p>
          <p>⚙️ Teaching Efficiency</p>
          <p>📈 Improved Learning Outcomes</p>
          <p>🔍 Academic Visibility</p>
        </div>
      </div>

    </section>
  );
}
