import Link from "next/link";

const TopBar = () => {
  return (
    <div className="top-bar d-flex justify-content-between align-items-center p-2 bg-light text-light">
      <div className="d-flex">
        <div className="me-4 d-flex align-items-center">
          <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
          <span>NO.39/2, 2ND FLOOR, K. G. ROAD, NORTH, BANGALORE- 560009</span>
        </div>
        <div className="me-4 d-flex align-items-center">
          <i className="bi bi-telephone-fill me-2 text-primary"></i>
          <span>800.456.6743</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-clock-fill me-2 text-primary"></i>
          <span>Mon-Fri 09.00 - 06.00</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <Link href="#" className="text-light me-3">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link href="#" className="text-light me-3">
          <i className="bi bi-twitter"></i>
        </Link>
        <Link href="#" className="text-light me-3">
          <i className="bi bi-youtube"></i>
        </Link>
        <Link href="#" className="text-light me-3">
          <i className="bi bi-pinterest"></i>
        </Link>
        <Link href="#" className="text-light">
          <i className="bi bi-instagram"></i>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
