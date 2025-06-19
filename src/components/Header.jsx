const Header = () => {

  return (
    <div className="flex items-center justify-center gap-2 glass px-4 py-3 sticky top-0 z-10 bg-teal-300">
      <span className="text-2xl"><img src="/src/assets/todo.svg" className="w-4 md:w-6" /></span>
      <h1 className="text-lg md:text-xl font-bold text-teal-900">
        Todo | Your Personal Task Manager
      </h1>
    </div>
  );
};

export default Header;
