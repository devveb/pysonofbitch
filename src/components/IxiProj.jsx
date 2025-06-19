import screenshot from '../images/img1.png';

export default function ProjectDetail() {
    return (
        <div style={{ padding: 20, maxWidth: 800, margin: "auto", fontFamily: "Arial, sans-serif" }}>

            <h3>Project Name</h3>
            <p>Ixi Solution Batch System</p>

            <h3>Duration</h3>
            <p>Mar 2025 – Present</p>

            <h3>Role</h3>
            <p>Backend Development and Deployment Operations</p>

            <h3>Project Overview</h3>
            <p>
                This project involved containerizing Spring Batch jobs that process large volumes of data periodically within a Kubernetes environment, aiming for stable and reliable operations.
            </p>

            <h3>Challenges</h3>
            <p>
                Intermittent spikes in memory usage occurred in the batch jobs deployed on Kubernetes pods, impacting service stability.
            </p>
            <h3>Screenshot</h3>
            <img src={screenshot} alt="Project Screenshot" style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />

            <h3>Resolution Process</h3>
            <ul>
                <li>Optimized garbage collection and mitigated excessive memory usage by adjusting JVM memory-related parameters (-Xms, -Xmx, -XX:MaxMetaspaceSize, etc.)</li>
                <li>Analyzed root causes using memory profiling tools</li>
                <li>Ensured stable memory usage by tuning pod resource limits in coordination with JVM options</li>
            </ul>

            <h3>Results</h3>
            <p>
                Resolved memory spike issues, improving batch job stability.<br />
                Reduced service downtime and increased operational efficiency.
            </p>

            <button
                onClick={() => window.history.back()}
                style={{ marginTop: 20, padding: "8px 16px", cursor: "pointer" }}
            >
                Go Back
            </button>
        </div>
    );
}
