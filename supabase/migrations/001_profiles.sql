-- profiles 테이블: 사용자 절세 진단 결과 저장
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  age_group text,
  job_type text,
  family_status text,
  income_range text,
  interests text[] default '{}',
  updated_at timestamptz default now()
);

-- RLS 활성화
alter table public.profiles enable row level security;

-- 본인 데이터만 읽기/쓰기 허용
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- 신규 유저 자동으로 profiles 레코드 생성
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
