using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace toDoCharityApp.Repositories {
    public class PostgresRepository<T> : IRepository<T> where T : class {
        private DbContext _context;
        private DbSet<T> _dbSet;

        public PostgresRepository(DbContext context) {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public void Add(T entity) {
            _dbSet.Add(entity);
        }

        public void Attach(T entity) {
            _dbSet.Attach(entity);
        }

        public void Delete(T entity) {
            if(entity == null) {
                throw new ArgumentNullException("Entity cannot be null");
            }
            _dbSet.Remove(entity);
        }

        public void Dispose() {
            Dispose(true);

            GC.SuppressFinalize(this); ;
        }

        protected virtual void Dispose(bool disposing) {
            if (disposing) {
                if (_context != null) {
                    _context.Dispose();
                    _context = null;
                }
            }
        }

        public IQueryable<T> Fetch() {
            return _dbSet;
        }

        public IEnumerable<T> Find(Func<T, bool> predicate) {
            return _dbSet.Where<T>(predicate);
        }

        public T First(Func<T, bool> predicate) {
            return _dbSet.First<T>(predicate);
        }

        public IEnumerable<T> GetAll() {
            return _dbSet.AsEnumerable();
        }

        public void SaveChanges() {
            _context.SaveChanges();
        }

        public T Single(Func<T, bool> predicate) {
            return _dbSet.Single<T>(predicate);
        }
    }
}
