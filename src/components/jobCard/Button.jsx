/* eslint-disable react/prop-types */
import "../../global.css";

const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(122, 122, 122, 0.6)"; // Adjusted color to white with slight transparency
    circle.style.transform = "scale(0)";
    circle.style.animation = "ripple 0.6s linear";
    button.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 900); // Corrected to match the animation duration of 600ms
};

const Button = ({ link, children }) => {
    const buttonClass = `relative overflow-hidden bg-[#55efc4] flex items-center justify-center rounded-lg text-black text-xl px-4 py-3 mt-2 mb-2
                       transition transform hover:-translate-y-1 ease-in duration-200
                       w-full`;

    return (
        <a href={link} className="w-full">
            <button className={buttonClass} onClick={createRipple}>
                {children}
            </button>
        </a>
    );
};

export default Button;

export const ButtonAvatar = ({ children }) => {
    const buttonClass = `relative overflow-hidden bg-[#4B57DB] flex items-center justify-center rounded-lg text-white text-xl px-4 py-3 mt-2 mb-2
                       transition transform hover:-translate-y-1 ease-in duration-200
                       w-full`;
    return (
        <a>
            {" "}
            <button className={buttonClass} onClick={createRipple}>
                <div className="relative mr-2 blur-3xl py-1">
                    <img
                        className="w-7 h-7 rounded-full "
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                        alt=""
                    />
                    <span className="bottom-0 left-4 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="relative blur-3xl">
                    <img
                        className="w-7 h-7 rounded-full"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                        alt=""
                    />
                    <span className="bottom-0 left-4 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <p className="pl-2 text-base">{children}</p>
            </button>
        </a>
    );
};
