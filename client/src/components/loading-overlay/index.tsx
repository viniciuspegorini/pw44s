import { Dialog } from "primereact/dialog";
import { ProgressSpinner } from "primereact/progressspinner";

interface ILoadingingOverlayProps {
    loading: boolean
}

export const LoadingOverlay = ({loading} : ILoadingingOverlayProps) => (
  <Dialog visible={loading} onHide={() => {}} modal closable={false} header={null} footer={null}>
    <div className="flex justify-center items-center py-10">
      <ProgressSpinner />
    </div>
  </Dialog>
);

export default LoadingOverlay;
