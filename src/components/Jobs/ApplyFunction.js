// ApplyFunction.js
import { userApplyJobAction } from "../../redux/actions/userAction";

export const applyForAJob = async (dispatch, jobData) => {
  try {
    await dispatch(
      userApplyJobAction({
        jobTitle: jobData.jobTitle,
        description: jobData.description,
        category: jobData.category,
        location: jobData.location,
        jobId: jobData.job_id,
        companyId: jobData.company_id,
      })
    );
  } catch (error) {
    console.error("Error applying for the job:", error);
  }
};
